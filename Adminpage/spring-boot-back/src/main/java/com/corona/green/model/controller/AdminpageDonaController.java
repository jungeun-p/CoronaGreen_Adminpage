package com.corona.green.model.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.corona.green.model.biz.AdminpageDonaBiz;
import com.corona.green.model.dto.DonaDto;

@CrossOrigin(origins="*", maxAge = 3600)
@RestController
public class AdminpageDonaController {
	
	@Autowired
	AdminpageDonaBiz donabiz;
	
	@RequestMapping(value="/donas", method=RequestMethod.GET)
	public List<DonaDto> donaList(){
		System.out.println(donabiz.donaList());
		System.out.println("print donalist!");
		List<DonaDto> list = donabiz.donaList();
		for (int i = 0; i < list.size(); i++) {
			SimpleDateFormat transFormat1 = new SimpleDateFormat("yyyy-MM-dd");			
			String to1 = transFormat1.format(list.get(i).getRegdate());
			list.get(i).setRegdate(Date.valueOf(to1));
		}
		return list;
	}
	
	@RequestMapping(value="/donas/{id}", method=RequestMethod.GET)
	public DonaDto selectOne(String id) {
		System.out.println(donabiz.selectOne(id));
		DonaDto selectDona = selectOne(id);
		return selectDona;
		
	}
	
	

}
