package mzc.was.controller;

import lombok.RequiredArgsConstructor;
import mzc.was.dto.AllResDto;
import mzc.was.dto.EventDto;
import mzc.was.dto.UserDto;
import mzc.was.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<AllResDto> loginUser(@RequestBody UserDto params) {
        return userService.loginUser(params);
    }

    @PostMapping("/join")
    public ResponseEntity<AllResDto> joinUser(@RequestBody UserDto params) {
        return userService.joinUser(params);
    }

}
