import { ICommand } from "../typings/types";
import { ClaudeCode } from "../Devices/recipients";

export class DisableClaude implements ICommand {
    constructor(private claudecode: ClaudeCode) {}

    CommandName = '/stopClaude';

    execute(): void {
        this.claudecode.stop();
    }
};