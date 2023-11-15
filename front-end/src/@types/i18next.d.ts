import "i18next";

import global_en from "../translations/en/global";
import global_ge from "../translations/ge/global.json";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "en";

		resources: {
			en: { global: typeof global_en };
			ge: { global: typeof global_ge };
		};
	}
}
