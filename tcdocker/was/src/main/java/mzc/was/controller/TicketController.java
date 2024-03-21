package mzc.was.controller;

import lombok.RequiredArgsConstructor;
import mzc.was.dto.AllResDto;
import mzc.was.dto.EventDto;
import mzc.was.dto.TicketDto;
import mzc.was.service.TicketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tickets")
@RequiredArgsConstructor
public class TicketController {
    private final TicketService ticketService;

    @GetMapping
    public ResponseEntity<AllResDto> fetchTickets() {
        return ticketService.fetchTickets();
    }

    // 개발 코드----------------------------------------------------------------------------------------------------------
    // list up
    @PostMapping
    public ResponseEntity<AllResDto> postTickets(@RequestBody TicketDto params) {
        return ticketService.postTickets(params);
    }
}
