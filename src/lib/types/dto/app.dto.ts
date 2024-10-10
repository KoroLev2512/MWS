export type AppState = {
    backendIsAvailable: boolean | null;
    isLoading: boolean;
    menuPageIsOpen: boolean;
    toggleMenuPage: (value?: boolean) => void;
}
