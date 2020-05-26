"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv("season-1819_csv.csv");
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlreport("Tottenham");
summary.buildAndPrintReport(matchReader.matches);
