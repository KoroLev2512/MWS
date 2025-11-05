export type AppState = {
    backendIsAvailable: boolean | null;
    isLoading: boolean;
    menuPageIsOpen: boolean;
    contactModalIsOpen: boolean;
    toggleMenuPage: (value?: boolean) => void;
    toggleContactModal: (value?: boolean) => void;
}
