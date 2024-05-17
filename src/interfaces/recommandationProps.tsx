export interface RecommandationProps {
    logo: string; 
    name: string; 
    text: string;
    buttons: {
        bgColor: string;
        textColor: string;
        label: string;
    }[]; 
}