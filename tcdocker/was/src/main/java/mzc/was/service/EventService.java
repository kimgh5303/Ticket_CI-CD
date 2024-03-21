package mzc.was.service;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mzc.was.dto.AllResDto;
import mzc.was.dto.EventDto;
import mzc.was.entity.Event;
import mzc.was.rep.EventRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {
    private final EventRepository eventRepository;

    public ResponseEntity<AllResDto> fetchEvents() {
        List<Event> results = eventRepository.findAll();
       System.out.println("pipelinetest");
        return new ResponseEntity<>(new AllResDto(true, "fetch success", results), HttpStatus.OK);
    }

    // 개발 코드----------------------------------------------------------------------------------------------------------
    // list up
    @Transactional
    public ResponseEntity<AllResDto> postEvents(final EventDto params) {
        Event event = params.toEntity();
        eventRepository.save(event);
        return new ResponseEntity<>(new AllResDto(true, "post success", event), HttpStatus.OK);
    }
}

