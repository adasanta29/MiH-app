export enum SelectedPage {
    Home = "home",
    About = "about",
    Services = "services",
    Samskaras = "samskaras",
    Pujas = "pujas",
    Outreach = "outreach",
    Gallery = "gallery",
    ContactUs = "contactus"
}

export interface ServiceType {
    icon: JSX.Element;
    title: string;
    description: string;
}