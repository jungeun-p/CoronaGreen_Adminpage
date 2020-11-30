package com.corona.green.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.corona.green.model.dto.DonaDto;

@Mapper
public interface AdminpageDonaMapper {
	
	@Select(" SELECT * FROM donation ORDER BY id ")
	List<DonaDto> donaList();
	
	@Select(" SELECT * FROM donation WHERE id = #{id} ")
	DonaDto SelectOne(String id);

}
