import { Callback } from '../../../shared/types';

export interface FullscreenToggleProps {
  /**
   * Whether the underlying control should be disabled (not-interactable).
   */
  disabled: boolean;

  /**
   * ♿ **ARIA:** Identifies the element (or elements) that describes the underlying control.
   */
  describedBy?: string;

  /**
   * ♿ **ARIA:** The `aria-label` property of the underlying playback control.
   *
   * @required
   */
  label?: string;
}

export interface FullscreenToggleFakeProps {
  fakeFullscreen: boolean;
}

export interface FullscreenToggleActions {
  onUserFullscreenChange: Callback<CustomEvent>;
}