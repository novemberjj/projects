package com.markup.www.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.markup.www.domain.BoardDTO;
import com.markup.www.domain.BoardVO;
import com.markup.www.domain.PagingVO;

@Service
public interface BoardService {
	
	List<BoardVO> getList(PagingVO pgvo);

	List<BoardVO> getPopList(PagingVO pgvo);

	String getBoardLike(int bno);
	
	int register(BoardDTO bdto);

	BoardDTO getDetailFile(int bno);

	int modifyFile(BoardDTO bdto);

	int remove(int bno);

	List<BoardVO> getblackList();

	int restore(int bno);

	int updateLikeUser(BoardVO bvo);

	List<BoardVO> getlikeList(PagingVO pgvo);

	List<BoardVO> getpostList(PagingVO pgvo);

	List<BoardDTO> getDTOList(PagingVO pgvo);

	int removeFile(String uuid);




}
