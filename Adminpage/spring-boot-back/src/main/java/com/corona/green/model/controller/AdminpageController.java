package com.corona.green.model.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.corona.green.model.biz.AdminpageBiz;
import com.corona.green.model.biz.AdminpageReBiz;
import com.corona.green.model.dto.MemberDto;
import com.corona.green.model.dto.QnaboardReDto;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AdminpageController {

	@Autowired
	AdminpageBiz biz;

	// user list
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public List<MemberDto> userList() {
		System.out.println(biz.userList());
		System.out.println("print userlist!!!");
		return biz.userList();
	}
	
	// fetch id
	@RequestMapping(value="/users/{id}", method=RequestMethod.GET)
	public MemberDto fetchUserByID(@PathVariable String id) {
		System.out.println(biz.fetchUserByID(id));
		MemberDto fetchUser = biz.fetchUserByID(id);
		return fetchUser;
	}

	// update
	@RequestMapping(value="/users/{id}", method=RequestMethod.PUT)
	void updateUser(@PathVariable String id, @RequestBody MemberDto user) {

		MemberDto updateUser = user;
		System.out.println("update user" + updateUser);

		updateUser.setPhone(user.getPhone());
		updateUser.setAddress(user.getAddress());
		updateUser.setRole(user.getRole());

		biz.updateUser(updateUser);
	}

	// insert
	@RequestMapping(value="/users", method=RequestMethod.POST)
	void insertUser(@RequestBody MemberDto user) {
		biz.insertUser(user);
		System.out.println("insert user to db!");
	}

	// delete
	@RequestMapping(value="/users/{id}", method=RequestMethod.DELETE)
	void deleteUser(@PathVariable String id) {
		biz.deleteUser(id);
		System.out.println("user delete!");
	}

}
