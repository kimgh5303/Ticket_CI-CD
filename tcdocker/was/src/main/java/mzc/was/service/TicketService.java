package mzc.was.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mzc.was.dto.AllResDto;
import mzc.was.dto.EventDto;
import mzc.was.dto.TicketDto;
import mzc.was.entity.Event;
import mzc.was.entity.Ticket;
import mzc.was.entity.User;
import mzc.was.rep.EventRepository;
import mzc.was.rep.TicketRepository;
import mzc.was.rep.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {
    private final TicketRepository ticketRepository;
    private final EventRepository eventRepository;
    private final UserRepository userRepository;

    public ResponseEntity<AllResDto> fetchTickets() {
        List<Ticket> results = ticketRepository.findAll();
        return new ResponseEntity<>(new AllResDto(true, "fetch success", results), HttpStatus.OK);
    }

    // 개발 코드----------------------------------------------------------------------------------------------------------
    // list up
    @Transactional
    public ResponseEntity<AllResDto> postTickets(final TicketDto params) {
        Event event = eventRepository.findById(params.getEventid())
                .orElseThrow(() -> new EntityNotFoundException("Event not found with id: " + params.getEventid()));
        User user = userRepository.findById(params.getUsid())
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + params.getUsid()));

        Ticket ticket = new Ticket();
        ticket.setEvent(event);
        ticket.setUser(user);
        return new ResponseEntity<>(new AllResDto(true, "post success", ticket), HttpStatus.OK);
    }
}
