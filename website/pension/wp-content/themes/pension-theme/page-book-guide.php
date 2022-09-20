<?php include "sub-header.php" ?>
<!--페이지 제목 출력-->
<h2 class="sub-title"><?php the_title(); ?></h2>
<!-- 
    <p class="theme-guide">페이지본문에서 직접 작성</p>
    <div class="sub-desc">
      <p>페이지 본문에서 직접 작성</p>
    </div>  
  -->
<!--페이지 출력 시작-->
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <p class="theme-guide">
      본문은 테마폴더의 page-book-guide.php에서 편집하실 수 있습니다.
    </p>
    <p class="sub-desc">
      예약전 상세내용을 참고해 주세요
    </p>
    <!--페이지 본문 출력-->
    <section class="section-guide section-guide-1">
      <h3>입금안내</h3>
      <ul>
        <li>문의전화: 010-0000-0000</li>
        <li>계좌안내: 농협 123-456-7890 (예금주:홍길동)</li>
      </ul>
    </section>
    <section class="section-guide">
      <h3>안내사항</h3>
      <ul>
        <li>입실 시간은 이용당일 15:00부터 22:00까지입니다.</li>
        <li>퇴실 시간은 마지막 이용일 오전 11:00까지입니다. (15:00 까지 : 객실 요금 50% / 15:00 이후 : 객실 요금 100%)</li>
        <li>Late Check out은 사전 요청 시 한함. (체크 아웃 시간에 따라 요금이 부과됩니다.)</li>
        <li>예약한 인원과 입실 인원이 다를 시 입장하실 수 없으며, 당일 예약 취소와 동일시됩니다.</li>
        <li>기준인원 초과 시 , 성인과 2세 이상의 유아 및 아동은 성인과 같은 요금으로 추가됩니다.</li>
        <li>예약 신청 후 일정 시간 내에 이용요금 결제가 완료되지 않을 경우 예약신청은 자동으로 취소될 수 있습니다.</li>
        <li>전 객실은 금연구역으로 지정되어 있습니다.</li>
        <li>객실 정리 후 퇴실 점검을 받으셔야 하며, 점건 후 객실 키를 반납해주시기 바랍니다.</li>
        <li>쓰레기는 지정된 장소에 분리하여 배출해 주시기 바랍니다.</li>
      </ul>
    </section>
    <section class="section-guide">
      <h3>객실요금안내</h3>
      <table>
        <thead>
          <tr>
            <th rowspan="2">객실명</th>
            <th rowspan="2">m<ruby>2</ruby></th>
            <th rowspan="2">인원(기준/최대)</th>
            <th colspan="3">비수기요금</th>
            <!-- <th></th> -->
            <!-- <th></th> -->
            <th colspan="3">준성수기요금</th>
            <!-- <th></th> -->
            <!-- <th></th> -->
            <th colspan="3">성수기요금</th>
            <!-- <th></th> -->
            <!-- <th></th> -->
          </tr>
          <tr>
            <!-- <th></th> -->
            <!-- <th></th> -->
            <!-- <th></th> -->
            <th>주중</th>
            <th>주말</th>
            <th>휴일</th>
            <th>주중</th>
            <th>주말</th>
            <th>휴일</th>
            <th>주중</th>
            <th>주말</th>
            <th>휴일</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </section>
    <section class="section-guide">
      <h3>유의사항</h3>
      <ul>
        <li>입실 시간은 이용당일 15:00부터 22:00까지입니다.</li>
        <li>퇴실 시간은 마지막 이용일 오전 11:00까지입니다. (15:00 까지 : 객실 요금 50% / 15:00 이후 : 객실 요금 100%)</li>
        <li>Late Check out은 사전 요청 시 한함. (체크 아웃 시간에 따라 요금이 부과됩니다.)</li>
        <li>예약한 인원과 입실 인원이 다를 시 입장하실 수 없으며, 당일 예약 취소와 동일시됩니다.</li>
        <li>기준인원 초과 시 , 성인과 2세 이상의 유아 및 아동은 성인과 같은 요금으로 추가됩니다.</li>
        <li>예약 신청 후 일정 시간 내에 이용요금 결제가 완료되지 않을 경우 예약신청은 자동으로 취소될 수 있습니다.</li>
        <li>전 객실은 금연구역으로 지정되어 있습니다.</li>
        <li>객실 정리 후 퇴실 점검을 받으셔야 하며, 점건 후 객실 키를 반납해주시기 바랍니다.</li>
        <li>쓰레기는 지정된 장소에 분리하여 배출해 주시기 바랍니다.</li>
      </ul>
    </section>
    <section class="section-guide">
      <h3>환불규정</h3>
      <ul>
        <li>
        온라인 실시간 예약 후 날짜변경, 객실변경은 예약 취소 후 다시 예약하셔야 합니다.은 객실내에서는 조리할수 없습니다.
        </li>
        <li>
          객실과 날짜는 예약 전 신중히 생각하시고 결정해주시기 바랍니다.
          <ul>
            <li>도착일 기준 9일전 취소 : 100% 환불</li>
            <li>도착일 기준 7일전 취소 : 90% 환불</li>
            <li>도착일 기준 5일전 취소 : 50% 환불</li>
            <li>도착일 기준 3일전 취소 : 30% 환불</li>
            <li>도착일 기준 2일전 취소 : 20% 환불</li>
            <li>도착일 기준 0일전 취소 : 0% 환불</li>
          </ul>
        </li>
      </ul>
    </section>
    <!--페이지 본문 출력 끝-->
  <?php endwhile;
else : ?>
  <!--페이지가 없을 경우 출력될 내용-->
<?php endif; ?>
<!--페이지 출력 끝-->
<?php include "sub-footer.php" ?>