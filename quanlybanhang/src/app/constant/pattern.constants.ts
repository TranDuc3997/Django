export class PatternConstant {
  public static PATTERN_EMAIL = /^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
  public static PATTERN_PASSWORD = /^[a-zA-Z0-9@%+\\/'!#$^?:.(){}\[\]~\-_.]*$/;
  public static PATTERN_NUMBER_ONLY = /^[0-9]*$/;
  public static PATTERN_WORD_VN = /[^\sa-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
  public static PATTERN_YYYYMMDD = "YYYY/MM/DD";
}
