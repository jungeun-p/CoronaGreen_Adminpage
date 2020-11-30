package com.corona.green.model.dto;

import java.util.Date;

import lombok.Data;

@Data
public class DonaDto {
	
	private int donationorder;
	private String id;
	private int payment;
	private Date regdate;
	
	public DonaDto() {
		
	}
	
	public DonaDto(int donationorder, String id, int payment, Date regdate) {
		this.donationorder = donationorder;
		this.id = id;
		this.payment = payment;
		this.regdate = regdate;
	}

	public int getDonationorder() {
		return donationorder;
	}

	public void setDonationorder(int donationorder) {
		this.donationorder = donationorder;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getPayment() {
		return payment;
	}

	public void setPayment(int payment) {
		this.payment = payment;
	}

	public Date getRegdate() {
		return regdate;
	}

	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	
	
}
