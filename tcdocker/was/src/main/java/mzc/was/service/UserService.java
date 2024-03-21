package mzc.was.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mzc.was.dto.AllResDto;
import mzc.was.dto.UserDto;
import mzc.was.entity.Event;
import mzc.was.entity.User;
import mzc.was.error.CustomException;
import mzc.was.error.ErrorCode;
import mzc.was.rep.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public ResponseEntity<AllResDto> loginUser(final UserDto params){
        User tempUser = userRepository.findByUseridAndUserpw(params.getUserid(), params.getUserpw());
        if(tempUser==null){throw new CustomException(ErrorCode.USER_NOT_FIND);}
        return new ResponseEntity<>(new AllResDto(true, "회원정보 일치", tempUser), HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity<AllResDto> joinUser(final UserDto params){
        User tempUser = params.toEntity();
        if(userRepository.findById(tempUser.getUserid()).isPresent()){throw new CustomException(ErrorCode.USER_EXIST);}
        userRepository.save(tempUser);
        return new ResponseEntity<>(new AllResDto(true, "유저 등록 성공"), HttpStatus.OK);
    }
}
