import { ICommand } from "../typings/types";
import { ClaudeCode } from "../Devices/recipients";

export class EnableClaude implements ICommand {
    constructor(private claudecode: ClaudeCode) {}

    CommandName = '/startClaude';

    execute(): void {
        this.claudecode.start();
    }
};