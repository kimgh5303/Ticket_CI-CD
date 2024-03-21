package mzc.was.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name="events")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @Column(name="et_id") @NotNull
    private String etid = UUID.randomUUID().toString(); // UUID로 식별자 생성
    @Column(name="et_name")
    private String etname;
    @Column(name="et_stime")
    private LocalDateTime etstime;
    @Column(name="et_etime")
    private LocalDateTime etetime;
}
