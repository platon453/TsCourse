export interface ICommand {
    CommandName: string;
    execute(): void;
}