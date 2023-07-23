package com.markup.www.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter
public class FileVO {

	private String uuid;
	private String saveDir;
	private String fileName;
	private int fileType;
	private int bno;
	private long fileSize;
	private String regDate;
	private String bnos;

	
//	public String getUuid() {
//		return uuid;
//	}
//	public void setUuid(String uuid) {
//		this.uuid = uuid;
//	}
//	public String getSave_dir() {
//		return saveDir;
//	}
//	public void setSave_dir(String save_dir) {
//		this.saveDir = save_dir;
//	}
//	public String getFile_name() {
//		return fileName;
//	}
//	public void setFile_name(String file_name) {
//		this.fileName = file_name;
//	}
//	public int getFile_type() {
//		return fileType;
//	}
//	public void setFile_type(int file_type) {
//		this.fileType = file_type;
//	}
//	public int getBno() {
//		return bno;
//	}
//	public void setBno(int bno) {
//		this.bno = bno;
//	}
//	public long getFile_size() {
//		return fileSize;
//	}
//	public void setFile_size(long file_size) {
//		this.fileSize = file_size;
//	}
//	public String getReg_date() {
//		return regDate;
//	}
//	public void setReg_date(String reg_date) {
//		this.regDate = reg_date;
//	}
//	
//	
//	@Override
//	public String toString() {
//		return "FileVO [uuid=" + uuid + ", save_dir=" + saveDir + ", file_name=" + fileName + ", file_type="
//				+ fileType + ", bno=" + bno + ", file_size=" + fileSize + ", reg_date=" + regDate + "]";
//	}
//	
//	public void setBnos(String bnos) {
//		this.bnos = bnos;
//	}
//	public String getBnos() {
//		return bnos;
//	}
	public Integer[] getBnosArr() {
		if(bnos==null) {
			return null;
		}else {
		String[] bnoStringArray = bnos.split(",");
		Integer[] bnoIntegerArray = new Integer[bnoStringArray.length];
		for (int i = 0; i < bnoStringArray.length; i++) {
			bnoIntegerArray[i] = Integer.parseInt(bnoStringArray[i]);
		}
		return bnoIntegerArray;
		}
	}
//	
//	
//	public FileVO(String uuid, String save_dir, String file_name, int file_type, int bno, long file_size,
//			String reg_date) {
//		this.uuid = uuid;
//		this.saveDir = save_dir;
//		this.fileName = file_name;
//		this.fileType = file_type;
//		this.bno = bno;
//		this.fileSize = file_size;
//		this.regDate = reg_date;
//	}
//	
//	
//	public FileVO() {}
//	
//}
}
