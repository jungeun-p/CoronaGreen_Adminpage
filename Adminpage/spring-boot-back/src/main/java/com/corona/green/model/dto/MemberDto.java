package com.corona.green.model.dto;

import lombok.Data;

@Data
public class MemberDto {

	private String id;
	private String phone;
	private String address;
	private String email;
	private String role;

	public MemberDto() {
		super();
	}

	public MemberDto(String id, String phone, String address, String email, String role) {
		super();
		this.id = id;
		this.phone = phone;
		this.address = address;
		this.email = email;
		this.role = role;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	

}
