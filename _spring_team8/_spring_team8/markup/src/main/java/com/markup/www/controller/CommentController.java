package com.markup.www.controller;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.markup.www.domain.BoardVO;
import com.markup.www.domain.CommentVO;
import com.markup.www.service.BoardService;
import com.markup.www.service.CommentService;



@RequestMapping("/comment/*")
@Controller
public class CommentController {

	private static final Logger log = LoggerFactory.getLogger(CommentController.class); 

	
	@Inject
	private BoardService bsv;
	@Inject
	private CommentService csv;
	
	//ResponseEntity
	//value : mapping 값 설정, consumes : 가져오는 값의 형태
	//produces : 보낼때의 형식
	
	@PostMapping(value="/post", consumes = "application/json",
			produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> post(@RequestBody CommentVO cvo){
		log.info(">>>> cvo : "+cvo);
		//DB 연결
		int isOk = csv.post(cvo);
		//리턴을 위해서는 response의 통신상태를 같이 리턴 
		return isOk> 0? new ResponseEntity<String>("1", HttpStatus.OK)
				: new ResponseEntity<String>("0", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping(value="/{bno}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<List<CommentVO>> spread(@PathVariable("bno")int bno){
		log.info(">>>> comment List bno "+bno);
		//DB 요청
		List<CommentVO> list = csv.getList(bno);
		return new ResponseEntity<List<CommentVO>>(list, HttpStatus.OK);
	}
	
	@PutMapping(value="/{cno}", consumes = "application/json",
			produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> edit(@PathVariable("cno")int cno, @RequestBody CommentVO cvo){
		log.info(">>>> edit cno "+cno);
		log.info(">>>> edit cvo "+cvo);
		
		int isOk = csv.edit(cvo);
		return isOk>0?
				new ResponseEntity<String>("1",HttpStatus.OK)
				: new ResponseEntity<String>("0", HttpStatus.INTERNAL_SERVER_ERROR);	
	}
	

	@DeleteMapping(value="/{cno}", produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> remove(@PathVariable("cno")int cno){
		log.info(">>>>>remove cno " + cno);
		int isOk = csv.remove(cno);
		return isOk>0?
				new ResponseEntity<String>("1",HttpStatus.OK)
				: new ResponseEntity<String>("0", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/delete")
	public String delete(RedirectAttributes rAttr, @RequestParam("cno") int cno) {
		// DB상 update하기 isDel = 1 => 글 삭제 처리
		int isOk = csv.remove(cno);
		log.info(">>> comment isOk 삭제 " + (isOk > 0 ? "OK" : "FAIL"));
		return "redirect:/comment/blackcomment";
	}

	@GetMapping("/restore")
	public String restore(RedirectAttributes rAttr, @RequestParam("cno") int cno) {
		// DB상 update하기 isDel = 0 => 삭제한글 복구
		int isOk = csv.restore(cno);
		log.info(">>> comment isOk 복구 " + (isOk > 0 ? "OK" : "FAIL"));
		return "redirect:/comment/blackcomment";
	}
	
	@GetMapping("/black")
	public String blackcomment(Model m) {
		List<BoardVO> list = bsv.getblackList();
		List<CommentVO> list2 = csv.getblackcomment();
		m.addAttribute("BoardList", list);
		m.addAttribute("CommentList", list2);
		return "/manager/blackcomment";
	}

}
