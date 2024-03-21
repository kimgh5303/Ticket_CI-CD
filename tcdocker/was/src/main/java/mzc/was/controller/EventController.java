package mzc.was.controller;

import lombok.RequiredArgsConstructor;
import mzc.was.dto.AllResDto;
import mzc.was.dto.EventDto;
import mzc.was.service.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {
    private final EventService eventService;

    @GetMapping
    public ResponseEntity<AllResDto> fetchEvents() {
        return eventService.fetchEvents();
    }

    // 개발 코드----------------------------------------------------------------------------------------------------------
    // list up
    @PostMapping
    public ResponseEntity<AllResDto> postEvents(@RequestBody EventDto params) {
        return eventService.postEvents(params);
    }

}
