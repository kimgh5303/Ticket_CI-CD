package mzc.was.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {
    NEED_TO_LOGIN(HttpStatus.UNAUTHORIZED, "로그인이 필요합니다"),
    USER_NOT_FIND(HttpStatus.NOT_FOUND, "회원을 찾을 수 없습니다"),
    USER_EXIST(HttpStatus.CONFLICT, "회원이 존재합니다"),
    TRANS_FAIL(HttpStatus.INTERNAL_SERVER_ERROR, "실패하였습니다");           // 500 error

    private final HttpStatus httpStatus;
    private final String message;
}
