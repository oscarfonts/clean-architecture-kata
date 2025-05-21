import { init } from "./presenter/presenter.ts";
import { TerminalView } from "./presenter/terminalView.ts";
import { initDI } from "./compositionRoot.ts";

initDI();
const view = new TerminalView();

init({ view });
