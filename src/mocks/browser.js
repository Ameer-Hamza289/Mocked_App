import {setupWorker } from "msw/browser";
import {handlers} from "./handlers";

const server=setupWorker(...handlers);

server.start();