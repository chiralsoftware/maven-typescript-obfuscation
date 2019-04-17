package chiralsoftware.obfuscation;

import java.util.logging.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {
    private static final Logger LOG = Logger.getLogger(Application.class.getName());

    public static void main(String[] args) {
        LOG.info("Starting applicaiton");
        SpringApplication.run(Application.class, args);
    }

}
