package com.babulens.weighbridge.service;

import com.babulens.weighbridge.model.PrintWeight;

import javax.print.PrintService;
import java.util.List;

public interface PrinterService {
    List<String> getAllPrinters();

    void printWeight(PrintWeight printWeight);

    List<String> getAllPrintFormat();

    PrintService getPrinter(String printer);

}
