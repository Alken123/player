import '../../../define/vds-mute-button';

import { elementUpdated } from '@open-wc/testing-helpers';
import { html } from 'lit';

import { buildMediaPlayerFixture } from '../../../media/test-utils';
import { waitForEvent } from '../../../utils/events';

async function buildFixture() {
  const { player } = await buildMediaPlayerFixture(html`
    <vds-mute-button>
      <div class="mute"></div>
      <div class="unmute"></div>
    </vds-mute-button>
  `);

  const button = player.querySelector('vds-mute-button')!;

  return { player, button };
}

test('light DOM snapshot', async function () {
  const { button } = await buildFixture();
  expect(button).dom.toMatchSnapshot();
});

test('shadow DOM snapshot', async function () {
  const { button } = await buildFixture();
  expect(button).shadowDom.to.equal(`<slot></slot>`);
});

test('it should update muted state', async function () {
  const { player, button } = await buildFixture();

  player._mediaStore.muted.set(true);
  await elementUpdated(button);

  expect(button.isPressed).to.be.true;
  expect(button.getAttribute('aria-pressed')).to.equal('true');
  expect(button.hasAttribute('media-muted')).to.be.true;

  player._mediaStore.muted.set(false);
  await elementUpdated(button);

  expect(button.isPressed).to.be.false;
  expect(button.getAttribute('aria-pressed')).to.equal('false');
  expect(button.hasAttribute('media-muted')).to.be.false;
});

test('it should mute player', async function () {
  const { player, button } = await buildFixture();

  const mutedSpy = vi.spyOn(player, 'muted', 'set');

  player._mediaStore.muted.set(false);
  await elementUpdated(button);

  setTimeout(() => button.dispatchEvent(new MouseEvent('pointerdown')));

  await waitForEvent(button, 'vds-mute-request');
  expect(mutedSpy).to.toHaveBeenCalledWith(true);
});

test('it should unmute player', async function () {
  const { player, button } = await buildFixture();

  const mutedSpy = vi.spyOn(player, 'muted', 'set');

  player._mediaStore.muted.set(true);
  await elementUpdated(button);

  setTimeout(() => button.dispatchEvent(new MouseEvent('pointerdown')));

  await waitForEvent(button, 'vds-unmute-request');
  expect(mutedSpy).to.toHaveBeenCalledWith(false);
});
