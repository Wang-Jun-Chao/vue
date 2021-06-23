package wjc.vue.backend;

import com.alibaba.fastjson.JSON;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * <pre>
 *
 * </pre>
 * Author: 王俊超
 * Date: 2021-06-19 14:59
 * Blog: http://blog.csdn.net/derrantcm
 * Github: https://github.com/wang-jun-chao
 * All Rights Reserved !!!
 */
@RestController
@CrossOrigin
public class VueController {
    @AllArgsConstructor
    @Data
    @Builder
    public static class Link {
        Integer id;
        String url;
        String name;
        Integer ord;
    }

    @GetMapping("/admin/link")
    public List<Link> adminLink() {

        return Lists.newArrayList(
                Link.builder().id(1).name("A").url("https://www.baidu.com").ord(1).build(),
                Link.builder().id(2).name("B").url("https://www.baidu.com").ord(2).build(),
                Link.builder().id(3).name("C").url("https://www.baidu.com").ord(3).build(),
                Link.builder().id(4).name("D").url("https://www.baidu.com").ord(4).build()
        );
    }

    @PostMapping(value = "/admin/link/add", headers = {"application/x-www-form-urlencoded"})
    public void adminLinkAdd(Link link, HttpServletRequest request) {
        System.out.println(JSON.toJSONString(link));
    }
}
