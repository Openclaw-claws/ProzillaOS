import { ReactElement, useEffect, useState } from "react";
import { useSettingsManager } from "../settings/settingsManagerContext";
import { Settings } from "../../features";
import { useSkin } from "../system/systemManagerContext";
import { Theme } from "@prozilla-os/skins";

export interface ThemeProviderProps {
	children: ReactElement;
}

export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
	const skin = useSkin();
	const [theme, setTheme] = useState<number | null>(skin.defaultTheme ?? Theme.Squadron);
	const settingsManager = useSettingsManager();
	const themeSettings = settingsManager?.getSettings(Settings.THEME);

	useEffect(() => {
		void themeSettings?.get("theme", (value: string) => {
			const parsed = parseInt(value);
			if (!isNaN(parsed)) setTheme(parsed);
		});
	}, [themeSettings]);

	return <div className={`${Theme[theme ?? Theme.Squadron]}-theme`}>
		{children}
	</div>;
} 