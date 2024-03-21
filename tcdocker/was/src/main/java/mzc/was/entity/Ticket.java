package mzc.was.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;

@Entity(name="tickets")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {
    @Id
    @Column(name="tk_id") @NotNull
    private String tkid;
    @ManyToOne
    @JoinColumn(name = "et_id")
    private Event event;
    @ManyToOne
    @JoinColumn(name = "us_id")
    private User user;
}
