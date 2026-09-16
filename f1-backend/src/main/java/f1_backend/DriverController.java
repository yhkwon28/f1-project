package f1_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DriverController{
    @GetMapping("/api/driver")
    public String getDriver() {
        return "Max Verstappen";
    }
}