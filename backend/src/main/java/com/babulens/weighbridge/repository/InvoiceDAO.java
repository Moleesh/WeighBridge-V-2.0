package com.babulens.weighbridge.repository;

import com.babulens.weighbridge.model.entity.Invoice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface InvoiceDAO extends CrudRepository<Invoice, String> {

    Invoice findFirstByDummyAndInvoiceNoAndProfileOrderByInvoiceNoDesc(boolean dummy, int invoiceNo, String profile);

    List<Invoice> findAllByInvoiceNoGreaterThanEqualAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(int invoiceNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByReferenceSlipNoGreaterThanEqualAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(String referenceSlipNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByDriverNameContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(String driverName, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByCustomersNameContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(String customersName, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByVehicleNoContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(String vehicleNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByMaterialContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(String material, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByModeOfPaymentContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndProfileOrderByInvoiceNoAsc(String modeOfPayment, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByInvoiceNoGreaterThanEqualAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(int invoiceNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByReferenceSlipNoGreaterThanEqualAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(String referenceSlipNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByCustomersNameContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(String customersName, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByDriverNameContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(String driverName, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByVehicleNoContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(String vehicleNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByMaterialContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(String material, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByModeOfPaymentContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsTrueAndProfileOrderByInvoiceNoAsc(String modeOfPayment, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByInvoiceNoGreaterThanEqualAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(int invoiceNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByReferenceSlipNoGreaterThanEqualAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(String referenceSlipNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByCustomersNameContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(String customersName, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByDriverNameContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(String driverName, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByVehicleNoContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(String vehicleNo, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByMaterialContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(String material, Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(Date startInvoiceTime, Date endInvoiceTime, String profile);

    List<Invoice> findAllByModeOfPaymentContainingAndInvoiceTimeGreaterThanEqualAndInvoiceTimeLessThanEqualAndDummyIsFalseAndProfileOrderByInvoiceNoAsc(String modeOfPayment, Date startInvoiceTime, Date endInvoiceTime, String profile);

    Long deleteByProfile(String profile);

    Invoice findFirstByInvoiceNoAndProfileAndDummyIsTrue(int invoiceNo, String profile);

}
