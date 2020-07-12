export interface IButtonProps extends React.HTMLProps<any> {
    id?: string;
    className?: string;
    onClick?: (e: React.SyntheticEvent<any>) => void;
}
