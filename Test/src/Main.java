public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
    public String longestCommonPrefix(String[] strs) {
        String response="";
        int j=0;
        while(j<strs[0].length()){
            char c=strs[0].charAt(j);
            boolean test=true;
            for (String str : strs) {
                int r = str.indexOf(c);
                if (r < 0) {
                    test = false;
                }
            }
            if(test){
                response=String.format("%s%c",response,c);
            }
            j++;
        }
        return response;
    }
}