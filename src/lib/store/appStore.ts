import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AppState } from "../types/dto/app.dto";
import { setCookie } from "nookies";
import { isUndefined } from "lodash";

export const useAppStore = create<AppState>()(
    devtools(
        immer((set) => ({
            backendIsAvailable: null,
            isLoading: false,
            menuPageIsOpen: false,
            toggleMenuPage: (value) => {
                set((state) => ({
                    menuPageIsOpen: !isUndefined(value) ? value : !state.menuPageIsOpen,
                }));
            },
        }))
    )
);