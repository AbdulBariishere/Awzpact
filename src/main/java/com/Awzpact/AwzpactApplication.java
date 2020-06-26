package com.Awzpact;

import com.Awzpact.filters.JwtRequestFilter;
import com.Awzpact.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Awzpact.modal.AuthenticationRequest;
import com.Awzpact.modal.AuthenticationResponse;
import com.Awzpact.repository.UserRepository;

@SpringBootApplication
public class AwzpactApplication {

	public static void main(String[] args) {
		SpringApplication.run(AwzpactApplication.class, args);
	}

}
@RestController
class HelloWorldController {

//	@Autowired
//	private AuthenticationManager authenticationManager;
//
//	@Autowired
//	private JwtUtil jwtTokenUtil;
//
//	@Autowired
//	private MyUserDetailsService userDetailsService;
//
//	@Autowired
//	UserRepository userRepository;
//	@Autowired
//	AuthenticationRequest authenticationRequest;
//	@RequestMapping({ "/hello" })
//	public String firstPage() {
//		return "Hello World";
//	}
//
//	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
//	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest ) throws Exception {
//
//		try {
//			String username=authenticationRequest.getUsername();
//			String password=authenticationRequest.getPassword();
//			authenticationManager.authenticate(
//					new UsernamePasswordAuthenticationToken(username, password)
//			);
//		}
//		catch (BadCredentialsException e) {
//			throw new Exception("Incorrect username or password", e);
//		}
//
//
//		final UserDetails userDetails = userDetailsService
//				.loadUserByUsername(authenticationRequest.getUsername());
//
//		final String jwt = jwtTokenUtil.generateToken(userDetails);
//
//		return ResponseEntity.ok(new AuthenticationResponse(jwt));
//	}


}
