package com.Awzpact.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.Awzpact.modal.AuthenticationRequest;
import java.util.List;

@Repository
public class UserRepository extends AuthenticationRequest {

    @Autowired
    JdbcTemplate jdbcTemplate;
public List checkusername(String username){
    String query="SELECT Name as username, Password as password from employees where Name='"+(username)+"'";
    List<AuthenticationRequest> list =jdbcTemplate.query(query, new BeanPropertyRowMapper<>(AuthenticationRequest.class));
    return list;
}
}

