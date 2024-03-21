package mzc.was.rep;

import mzc.was.entity.Event;
import mzc.was.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByUseridAndUserpw(String userid, String userpw);
}
