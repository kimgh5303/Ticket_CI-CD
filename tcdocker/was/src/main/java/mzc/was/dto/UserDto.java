package mzc.was.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Getter;
import mzc.was.entity.Event;
import mzc.was.entity.User;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;

@Getter
public class UserDto {
    private String userid;
    private String userpw;
    private String username;

    public User toEntity(){
        return User.builder()
                .userid(userid)
                .userpw(userpw)
                .username(username)
                .build();
    }
}
