package mzc.was.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import mzc.was.entity.Event;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;

@Getter
public class EventDto {
    private String eventid;
    private String eventname;
    private LocalDateTime etstime;
    private LocalDateTime etetime;

    public Event toEntity(){
        return Event.builder()
                .etid(eventid)
                .etname(eventname)
                .etstime(etstime)
                .etetime(etetime)
                .build();
    }
}
