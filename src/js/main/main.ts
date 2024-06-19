import App from "./main.svelte";
import { initBolt } from "../lib/utils/bolt";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

initBolt();

const app = new App({
  target: document.getElementById("root") as Element,
});

export default app;
