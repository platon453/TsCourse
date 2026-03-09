import { LightOnCommand } from "./Commands/enableLight";
import { LightOffCommand } from "./Commands/disableLight";
import { MusicPlayCommand } from "./Commands/playMusic";
import { MusicStopCommand } from "./Commands/disableMusic";
import { RemoteControl } from "./structures/initiator";
import { MusicPlayer } from "./Devices/recipients";
import { Light } from "./Devices/recipients";
import { ClaudeCode} from "./Devices/recipients";
import { EnableClaude } from "./Commands/enableCluadeCode";
import { DisableClaude } from "./Commands/disableClaudeCode";

const musicPlayer = new MusicPlayer();
const light = new Light();
const claude = new ClaudeCode;

const pult = new RemoteControl();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const musicPlay = new MusicPlayCommand(musicPlayer);
const musicStop = new MusicStopCommand(musicPlayer);
const claudeStart = new EnableClaude(claude);
const claudeStop = new DisableClaude(claude);


pult.setCommand('1', lightOn);
pult.setCommand('2', lightOff);
pult.setCommand('3', musicPlay);
pult.setCommand('4', musicStop);
pult.setCommand('5', claudeStart);
pult.setCommand('6', claudeStop);


const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
]

for (const buttonId of buttons) {
    pult.pressButton(buttonId);
}
