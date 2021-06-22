import {
	FakeMediaProviderElement,
	VDS_FAKE_MEDIA_PROVIDER_ELEMENT_TAG_NAME
} from './FakeMediaProviderElement.js';

declare global {
	interface HTMLElementTagNameMap {
		[VDS_FAKE_MEDIA_PROVIDER_ELEMENT_TAG_NAME]: FakeMediaProviderElement;
	}
}