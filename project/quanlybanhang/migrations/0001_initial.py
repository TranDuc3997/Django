# Generated by Django 2.2 on 2019-05-01 19:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ChucVu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tencv', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'ChucVu',
                'verbose_name_plural': 'ChucVus',
            },
        ),
        migrations.CreateModel(
            name='HinhThucThanhToan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenhinhthuctt', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'HinhThucThanhToan',
                'verbose_name_plural': 'HinhThucThanhToans',
            },
        ),
        migrations.CreateModel(
            name='KhachHang',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenkh', models.CharField(max_length=50)),
                ('diachikh', models.CharField(max_length=100, null=True)),
                ('sdtkh', models.CharField(max_length=13)),
                ('danhgia', models.CharField(max_length=50)),
                ('tendangnhap', models.CharField(max_length=50)),
                ('matkhau', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'KhachHang',
                'verbose_name_plural': 'KhachHangs',
            },
        ),
        migrations.CreateModel(
            name='KhuyenMai',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ngaybd', models.DateField(null=True)),
                ('ngaykt', models.DateField(null=True)),
                ('tenkm', models.CharField(max_length=50, null=True)),
                ('giamgia', models.FloatField(null=True)),
            ],
            options={
                'verbose_name': 'KhuyenMai',
                'verbose_name_plural': 'KhuyenMais',
            },
        ),
        migrations.CreateModel(
            name='LoaiHang',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenloai', models.CharField(max_length=100, null=True)),
            ],
            options={
                'verbose_name': 'LoaiHang',
                'verbose_name_plural': 'LoaiHangs',
            },
        ),
        migrations.CreateModel(
            name='NhaCungCap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenncc', models.CharField(max_length=50, null=True)),
                ('diachincc', models.CharField(max_length=50, null=True)),
                ('sdtncc', models.CharField(max_length=13, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
            ],
            options={
                'verbose_name': 'NhaCungCap',
                'verbose_name_plural': 'NhaCungCaps',
            },
        ),
        migrations.CreateModel(
            name='NhanVien',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tennv', models.CharField(max_length=50)),
                ('diachinv', models.CharField(max_length=50, null=True)),
                ('sdtnv', models.CharField(max_length=13, null=True)),
                ('email', models.CharField(max_length=100)),
                ('gioitinh', models.IntegerField(null=True)),
                ('cmnd', models.CharField(max_length=15, null=True)),
                ('chucvu', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.ChucVu')),
            ],
            options={
                'verbose_name': 'NhanVien',
                'verbose_name_plural': 'NhanViens',
            },
        ),
        migrations.CreateModel(
            name='TichXu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ngayketthuc', models.DateField(null=True)),
                ('tile', models.FloatField(null=True)),
            ],
            options={
                'verbose_name': 'TichXu',
                'verbose_name_plural': 'TichXus',
            },
        ),
        migrations.CreateModel(
            name='PhieuXuatKho',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenphieuxuat', models.CharField(max_length=50)),
                ('ngayxuatkho', models.DateField(null=True)),
                ('tinhtranghang', models.CharField(max_length=100)),
                ('nhanvien', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.NhanVien')),
            ],
            options={
                'verbose_name': 'PhieuXuatKho',
                'verbose_name_plural': 'PhieuXuatKhos',
            },
        ),
        migrations.CreateModel(
            name='PhieuNhapKho',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenphieunhap', models.CharField(max_length=50)),
                ('nhanvien', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.NhanVien')),
            ],
            options={
                'verbose_name': 'PhieuNhapKho',
                'verbose_name_plural': 'PhieuNhapKhos',
            },
        ),
        migrations.CreateModel(
            name='PhieuNhap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ngaynhap', models.DateField(null=True)),
                ('tonggiatri', models.FloatField(null=True)),
                ('nhacungcap', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.NhaCungCap')),
                ('nhanvien', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.NhanVien')),
            ],
            options={
                'verbose_name': 'PhieuNhap',
                'verbose_name_plural': 'PhieuNhaps',
            },
        ),
        migrations.CreateModel(
            name='PhieuGiaoHang',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thoigiangiao', models.DateField(null=True)),
                ('hinhthuc', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.HinhThucThanhToan')),
                ('khachhang', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.KhachHang')),
                ('nhanvien', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.NhanVien')),
            ],
            options={
                'verbose_name': 'PhieuGiaoHang',
                'verbose_name_plural': 'PhieuGiaoHangs',
            },
        ),
        migrations.AddField(
            model_name='khachhang',
            name='tichxu',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.TichXu'),
        ),
        migrations.CreateModel(
            name='HoaDon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ngaylaphd', models.DateField(null=True)),
                ('ngaygiao', models.DateField(null=True)),
                ('tongtien', models.FloatField(null=True)),
                ('tiengiamtichxu', models.FloatField(null=True)),
                ('khachhang', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.KhachHang')),
                ('nhanvien', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.NhanVien')),
            ],
            options={
                'verbose_name': 'HoaDon',
                'verbose_name_plural': 'HoaDons',
            },
        ),
        migrations.CreateModel(
            name='HangHoa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tenhang', models.CharField(max_length=50)),
                ('dongia', models.FloatField(null=True)),
                ('tinhtrang', models.IntegerField(null=True)),
                ('mota', models.CharField(max_length=200, null=True)),
                ('soluong', models.IntegerField(null=True)),
                ('hinhanh', models.CharField(max_length=200, null=True)),
                ('loaihang', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.LoaiHang')),
            ],
            options={
                'verbose_name': 'HangHoa',
                'verbose_name_plural': 'HangHoas',
            },
        ),
        migrations.CreateModel(
            name='ChiTietPhieuNhapKho',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('soluong', models.IntegerField(null=True)),
                ('ngaynhapkho', models.DateField(null=True)),
                ('phieunhapkho', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.PhieuNhapKho')),
            ],
            options={
                'verbose_name': 'ChiTietPhieuNhapKho',
                'verbose_name_plural': 'ChiTietPhieuNhapKhos',
            },
        ),
        migrations.CreateModel(
            name='ChiTietPhieuNhap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('soluongnhap', models.IntegerField(null=True)),
                ('dongianhap', models.FloatField(null=True)),
                ('thanhtien', models.FloatField(null=True)),
                ('hanghoa', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.HangHoa')),
                ('phieunhap', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.PhieuNhap')),
            ],
            options={
                'verbose_name': 'ChiTietPhieuNhap',
                'verbose_name_plural': 'ChiTietPhieuNhaps',
            },
        ),
        migrations.CreateModel(
            name='ChiTietHoaDon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('soluong', models.IntegerField(null=True)),
                ('giagiam', models.FloatField(null=True)),
                ('dongia', models.FloatField(null=True)),
                ('thanhtien', models.FloatField(null=True)),
                ('giamgia', models.FloatField(null=True)),
                ('hanghoa', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.HangHoa')),
                ('hoadon', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='quanlybanhang.HoaDon')),
            ],
            options={
                'verbose_name': 'ChiTietHoaDon',
                'verbose_name_plural': 'ChiTietHoaDons',
            },
        ),
    ]
