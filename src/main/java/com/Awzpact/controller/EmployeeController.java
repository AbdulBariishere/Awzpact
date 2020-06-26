package com.Awzpact.controller;

import java.util.logging.Logger;

import com.Awzpact.MyUserDetailsService;
import com.Awzpact.filters.JwtRequestFilter;
import com.Awzpact.modal.AuthenticationRequest;
import com.Awzpact.modal.AuthenticationResponse;
import com.Awzpact.repository.UserRepository;
import com.Awzpact.util.JwtUtil;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.*;

import com.Awzpact.modal.Employee;
import com.Awzpact.repository.EmployeeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	  
	   @Autowired
	   EmployeeRepository employeeRepository;
	 //  private final static Logger LOGGER = Logger.getLogger(EmployeeController.class.getName());
		@PostMapping("/add")

	    public String addemployee(@RequestBody Employee employee) {
			try {
				employeeRepository.addEmployee(employee);	
				return "successfull";
			}
			catch(Exception ex) {
				
				return ex.getMessage();
			}
			
		}
		@GetMapping("/show")
		public JSONObject showemployee() {
			JSONObject jsonobject = new JSONObject();
			try {
				 if (employeeRepository.showEmployee().isEmpty()) {
					 jsonobject.put("status", false);
					 jsonobject.put("data", "something went wrong");
			            return jsonobject;
			        } else {
			        	jsonobject.put("status", true);
			        	jsonobject.put("all", employeeRepository.showEmployee());
			        	jsonobject.put("enable",employeeRepository.showEnableEmployee());
			        	jsonobject.put("disable",employeeRepository.showDisableEmployee());
			        	jsonobject.put("enablecount",employeeRepository.showEnableEmployeeCount());
			        	jsonobject.put("disablecount",employeeRepository.showDisableEmployeeCount());
			        	
			            return jsonobject;
			        }
				
				
			}catch(Exception ex) {
				 ex.getMessage();
			}
			return jsonobject;
		}
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;

	@Autowired
	UserRepository userRepository;
	@Autowired
	AuthenticationRequest authenticationRequest;
	@RequestMapping({ "/hello" })
	public String firstPage() {
		return "Hello World";
	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest ) throws Exception {

		try {
			String username = authenticationRequest.getUsername();
			String password = authenticationRequest.getPassword();
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(username, password)
			);
		} catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	}

@EnableWebSecurity
class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService myUserDetailsService;
	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(myUserDetailsService);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.csrf().disable()
				.authorizeRequests().antMatchers("HttpMethod.OPTIONS","/api/**").permitAll().
				anyRequest().authenticated().and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/api/logout")).and().
				exceptionHandling().and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

	}

}