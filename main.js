"use strict";
import cloner from './cloner.js';
import TidySheetConnector from './connectors/tidy.js'

const tidySheetConnector = new TidySheetConnector(cloner);
Hooks.on("renderTidy5eSheet", tidySheetConnector.connect.bind(tidySheetConnector));