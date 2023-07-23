package com.markup.www.domain;

import java.util.List;

public class BoardDTO {

	private BoardVO bvo;
	private List<FileVO> fList;

	@Override
	public String toString() {
		return "BoardDTO [bvo=" + bvo + ", fList=" + fList + "]";
	}

	public BoardVO getBvo() {
		return bvo;
	}

	public void setBvo(BoardVO bvo) {
		this.bvo = bvo;
	}

	public List<FileVO> getfList() {
		return fList;
	}

	public void setfList(List<FileVO> fList) {
		this.fList = fList;
	}

	public BoardDTO(BoardVO bvo, List<FileVO> fList) {
		this.bvo = bvo;
		this.fList = fList;
	}

	public BoardDTO() {
	}

}
