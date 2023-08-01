package com.markup.www.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.markup.www.domain.BoardDTO;
import com.markup.www.domain.BoardUserDTO;
import com.markup.www.domain.BoardVO;
import com.markup.www.domain.FileVO;
import com.markup.www.domain.PagingVO;
import com.markup.www.domain.UserVO;
import com.markup.www.repository.BoardDAO;
import com.markup.www.repository.FileDAO;
import com.markup.www.repository.UserDAO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {

	@Inject
	private BoardDAO bdao;

	@Inject
	private FileDAO fdao;
	
	@Inject
	private UserDAO udao;

	@Override
	public List<BoardVO> getList(PagingVO pgvo) {
		log.info(">>>BoardDAO : getList");
		return bdao.getList(pgvo);
	}


	@Override
	public String getBoardLike(int bno) {
		log.info(">>>BoardDAO : getBoardLike");
		return bdao.getBoardLike(bno);
	}

	@Override
	public List<BoardUserDTO> getPopList(PagingVO pgvo) {
		log.info(">>>BoardDAO : getPopList");
		List<BoardUserDTO> budtoList = new ArrayList<BoardUserDTO>();
		List<BoardVO> blist = bdao.getPopList(pgvo);
		int i=0;
		for(BoardVO bvo :blist) {
			UserVO uvo = udao.getUser(bvo.getId());
			BoardUserDTO budto = new BoardUserDTO();
			List<FileVO> flist = fdao.getFileList(bvo.getBno());
			budto.setBvo(bvo);
			budto.setUvo(uvo);
			budto.setFList(flist);
			log.info(bvo.toString());
			log.info(uvo.toString());
			log.info(flist.toString());
			budtoList.add(budto);
			i++;
			log.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■pop"+i+"■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		}
		
		return budtoList;
	}

	@Override
	public int register(BoardDTO bdto) {
		log.info(">>>BoardDAO : register");
		// 기존 게시글에 대한 내용 DB 저장 내용 호출
		int isOk = bdao.insert(bdto.getBvo());
		if (bdto.getFList() == null) { // 파일이 없다를 의미
			isOk *= 1; // 그냥 성공한걸로 치고~
		} else {
			// bvo가 DB에 들어가고, 파일 개수가 있다면...
			if (isOk > 0 && bdto.getFList().size() > 0) {
				// register는 등록시 bno가 결정되어있지 않음.
				// int bno = bdto.getBvo().getBno(); //update시는 가능.
				int bno = bdao.selectBno(); // 방금 저장된 bvo의 bno 리턴받기
				// fList의 모든 file의 bno를 방금받은 bno로 set
				for (FileVO fvo : bdto.getFList()) {
					fvo.setBno(bno);
					log.info(">>>> insert File :" + fvo.toString());
					isOk *= fdao.insertFile(fvo);
				}
			}
		}
		return isOk;
	}

	@Override
	public BoardDTO getDetailFile(int bno) {
		log.info(">>>BoardDAO : getDetailFile");
		BoardDTO bdto = new BoardDTO();
		bdto.setBvo(bdao.getDetail(bno)); // bvo 호출
		bdto.setFList(fdao.getFileList(bno)); // fList 호출

		log.info(">>>>>>>>>>>>>>>>>>bdao.getDetail" + bdao.getDetail(bno));
		log.info(">>>> fdao.getFileList" + fdao.getFileList(bno));
		return bdto;
	}

	@Override
	public int modifyFile(BoardDTO bdto) {
		log.info(">>>BoardDAO : modifyFile");
		BoardVO tmpBoard = bdao.getDetail(bdto.getBvo().getBno()); // 해당 글의 게시글 호출

		int isOk = bdao.updateBoard(bdto.getBvo()); // 기존 보드내용 update
		if (bdto.getFList() == null) {
			isOk *= 1;
		} else {
			if (isOk > 0 && bdto.getFList().size() > 0) {
				int bno = bdto.getBvo().getBno();
				// fList의 모든 file의 bno를 방금받은 bno로 set
				for (FileVO fvo : bdto.getFList()) {
					fvo.setBno(bno);
					log.info(">>>> insert File :" + fvo.toString());
					isOk *= fdao.insertFile(fvo); // 추가한 파일 추가
					// 삭제는 별도로.
				}
			}
		}
		return isOk;
	}

	@Override
	public int remove(int bno) {
		log.info(">>>BoardDAO : remove");
		return bdao.deleteBoard(bno);
	}

	@Override
	public List<BoardVO> getblackList() {
		log.info(">>>BoardDAO : getblackList");
		return bdao.getblacklist();
	}

	@Override
	public int restore(int bno) {
		log.info(">>>BoardDAO : restore");
		return bdao.restoreBoard(bno);
	}

	@Override
	public int updateLikeUser(BoardVO bvo) {
		log.info(">>>BoardDAO : updateLikeUser");
		return bdao.updateLikeUser(bvo);
	}

	@Override
	public List<BoardUserDTO> getlikeList(PagingVO pgvo) {
		log.info(">>>BoardDAO : getlikeList");
		log.info("boardserviceimple id >> "+pgvo.getKeyword());
		String id=pgvo.getKeyword();
		List<BoardUserDTO> likelist = new ArrayList<BoardUserDTO>();
		List<BoardVO> list=bdao.getlikeList(pgvo);
		List<BoardVO>llist= new ArrayList<BoardVO>();
		for(BoardVO bvo : list) {
			String username[]=bvo.getLikeUserArr();
			for(String tmp :username) {
				if(id.equals(tmp)) {
					llist.add(bvo);
				}
			}
			
		}
		int i=0;
		for(BoardVO bvo :llist) {
			UserVO uvo = udao.getUser(bvo.getId());
			BoardUserDTO budto = new BoardUserDTO();
			List<FileVO> flist = fdao.getFileList(bvo.getBno());
			budto.setBvo(bvo);
			budto.setUvo(uvo);
			budto.setFList(flist);
			log.info(bvo.toString());
			log.info(uvo.toString());
			log.info(flist.toString());
			likelist.add(budto);
			i++;
			log.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■likelist"+i+"■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		}
		return likelist;
	}

	@Override
	public List<BoardUserDTO> getpostList(PagingVO pgvo) {
		log.info(">>>BoardDAO : getpostList");
		List<BoardUserDTO> postlist = new ArrayList<BoardUserDTO>();
		List<BoardVO> llist=bdao.getpostList(pgvo);
		int i=0;
		for(BoardVO bvo :llist) {
			UserVO uvo = udao.getUser(bvo.getId());
			BoardUserDTO budto = new BoardUserDTO();
			List<FileVO> flist = fdao.getFileList(bvo.getBno());
			budto.setBvo(bvo);
			budto.setUvo(uvo);
			budto.setFList(flist);
			log.info(bvo.toString());
			log.info(uvo.toString());
			log.info(flist.toString());
			postlist.add(budto);
			i++;
			log.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■postlist"+i+"■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		}
		return postlist;
	}

	@Override
	public int removeFile(String uuid) {
		log.info(">>>BoardDAO : removeFile");
		return fdao.deleteFile(uuid);
	}

	@Override
	public List<BoardUserDTO> getAllList(PagingVO pgvo) {
		log.info(">>>BoardDAO : getAllList");
		List<BoardUserDTO> budtoList = new ArrayList<BoardUserDTO>();
		List<BoardVO> blist = bdao.getList(pgvo);
		int i=0;
		for(BoardVO bvo :blist) {
			UserVO uvo = udao.getUser(bvo.getId());
			BoardUserDTO budto = new BoardUserDTO();
			List<FileVO> flist = fdao.getFileList(bvo.getBno());
			budto.setBvo(bvo);
			budto.setUvo(uvo);
			budto.setFList(flist);
			log.info(bvo.toString());
			log.info(uvo.toString());
			log.info(flist.toString());
			budtoList.add(budto);
			i++;
			log.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■"+i+"■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		}
		
		return budtoList;
	}


	@Override
	public int listBlackPlus(int bno) {
		log.info(">>>BoardDAO : listBlackPlus");
		int isOK = bdao.BlackPlus(bno);
		return isOK;
	}

}
